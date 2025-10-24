<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TicketController extends Controller
{
    public function index()
    {
        // possibilité de filtrer par status via query ?status=ouvert
        $status = request()->query('status');
        $query = Ticket::query();
        if ($status) $query->where('status', $status);
        return response()->json($query->orderBy('created_at','desc')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'in:ouvert,en_cours,resolu'
        ]);
        $ticket = Ticket::create($validated);
        return response()->json($ticket, Response::HTTP_CREATED);
    }

    public function show($id)
    {
        $ticket = Ticket::findOrFail($id);
        return response()->json($ticket);
    }

    public function update(Request $request, $id)
    {
        $ticket = Ticket::findOrFail($id);
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'in:ouvert,en_cours,resolu'
        ]);
        $ticket->update($validated);
        return response()->json($ticket);
    }

    public function destroy($id)
    {
        $ticket = Ticket::findOrFail($id);
        $ticket->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
