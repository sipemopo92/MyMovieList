<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\User;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index($user_id)
    {
        $user = User::find($user_id);
        $movies = $user->movies;
        return response()->json($movies);
    }

    public function store($user_id, Request $request)
    {
        $res = [
            'data' => '',
            'success' => true,
            'message' => ''
        ];
        try {
            $user = User::findOrFail($user_id);
            $movie = Movie::firstOrCreate(
                ['imdb_id' => $request->imdb_id],
                [
                    'title' => $request->title,
                    'year' => $request->year,
                    'released' => $request->released,
                    'runtime' => $request->runtime,
                    'country' => $request->country,
                ]
            );

            if (!$user->movies()->where('movies.id', $movie->id)->exists()) {
                $user->movies()->attach($movie);
            }
            $res['data'] = $movie;
        } catch (\Exception $e) {
            $res['success'] = false;
            $res['message'] = $e->getMessage();
        }
        return $res;
    }
}