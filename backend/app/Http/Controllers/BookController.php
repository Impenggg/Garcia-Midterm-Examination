<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class BookController extends Controller
{
    public function index(): JsonResponse
    {
        $books = Book::all();
        return response()->json($books);
    }

    public function show(Book $book): JsonResponse
    {
        return response()->json($book);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'published_year' => 'required|integer|min:1000|max:' . (date('Y') + 1),
            'genre' => 'required|string|max:255',
            'description' => 'required|string'
        ]);

        $book = Book::create($validated);
        return response()->json($book, 201);
    }

    public function update(Request $request, Book $book): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'author' => 'string|max:255',
            'published_year' => 'integer|min:1000|max:' . (date('Y') + 1),
            'genre' => 'string|max:255',
            'description' => 'string'
        ]);

        $book->update($validated);
        return response()->json($book);
    }

    public function destroy(Book $book): JsonResponse
    {
        $book->delete();
        return response()->json(null, 204);
    }
} 