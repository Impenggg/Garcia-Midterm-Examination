<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    protected $model = Book::class;

    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'author' => fake()->name(),
            'published_year' => fake()->numberBetween(1900, date('Y')),
            'genre' => fake()->randomElement(['Fiction', 'Non-Fiction', 'Mystery', 'Science Fiction', 'Romance', 'Fantasy', 'Biography', 'History', 'Technology', 'Self-Help']),
            'description' => fake()->paragraphs(2, true)
        ];
    }
} 