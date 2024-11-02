<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run()
    {
        // Create 1984 as a fixed example
        Book::create([
            'title' => '1984',
            'author' => 'George Orwell',
            'published_year' => 1949,
            'genre' => 'Dystopian',
            'description' => 'A dystopian social science fiction novel and cautionary tale.',
        ]);

        // Create 9 more random books using the factory
        Book::factory()->count(9)->create();
    }
} 