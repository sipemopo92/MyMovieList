<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OmdbController extends Controller
{

    public function getMovie(Request $request)
    {
        $apiKey = '608f851d';
        $res = [
            'data' => [],
            'success' => true,
            'message' => ''
        ];
        try {
            $title = $request->input('title');
            $imdbId = $request->input('imdbId');
            if ($title) {
                $titleFormatted = str_replace(' ', '+', $title);
                $response = Http::get("http://www.omdbapi.com/?apikey=$apiKey&t=$titleFormatted");
            } else if ($imdbId) {
                $response = Http::get("http://www.omdbapi.com/?apikey=$apiKey&i=$imdbId");
            } 
            if ($response['Response'] == 'True') {
                $movie = [
                    'title' => $response['Title'],
                    'year' => $response['Year'],
                    'released' => $response['Released'],
                    'runtime' => $response['Runtime'],
                    'genre' => $response['Genre'],
                    'director' => $response['Director'],
                    'writer' => $response['Writer'],
                    'actors' => $response['Actors'],
                    'country' => $response['Country'],
                    'poster' => $response['Poster'],
                    'imdbID' => $response['imdbID'],
                ];
                $res['data'] = $movie;
            } else {
                $res['message'] = 'Not found';
            }
        } catch (\Exception $e) {
            $res['success'] = false;
            $res['message'] = $e->getMessage();
        }
        return $res;
    }
}