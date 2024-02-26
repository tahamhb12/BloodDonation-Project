<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Http\JsonResponse;



class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'bloodtype' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'phonenumber' => ['required', 'string', 'min:10', 'max:10'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'bloodtype' => $request->bloodtype,
            'city' => $request->city,
            'phonenumber' => $request->phonenumber,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }

    /**
     * Update the specified user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request): Response
    {
        $request->validate([
            'bloodtype' => ['string', 'max:255'],
            'city' => ['string', 'max:255'],
            'phonenumber' => ['string', 'min:10', 'max:10'],
            'password' => ['confirmed', Rules\Password::defaults()],
        ]);

 $user = $request->user(); // Retrieve the authenticated user

    $dataToUpdate = [
        'bloodtype' => $request->bloodtype,
        'city' => $request->city,
        'phonenumber' => $request->phonenumber,
    ];

    // Check if password is provided and not empty
    if (!empty($request->password)) {
        $dataToUpdate['password'] = Hash::make($request->password);
    }

    $user->update($dataToUpdate);

    return response()->noContent();
    }

    /**
     * Get all registered users.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $users = User::all(); // Retrieve all users from the database

        return response()->json($users, 200);
    }

        /**
     * Delete the specified user.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $user = User::find($id);

        $user->delete();

        return response()->json(200);
    }
}
