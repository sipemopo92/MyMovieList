<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 
        'year', 
        'released',
        'runtime',
        'writer',
        'country',
        'imdb_id',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_movie');
    }
}
