<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       return [
        'title' => $this->faker->sentence(6),
        'description' => $this->faker->paragraph(),
        'status' => $this->faker->randomElement(['ouvert','en_cours','resolu']),
    ];
    }
}
