<?php

namespace ProjectManager\Http\Controllers;

use Illuminate\Http\Request;

use ProjectManager\Http\Requests;
use ProjectManager\Client;
use ProjectManager\Project;
use Validator;

class ClientController extends Controller
{
    /**
     * Return a listing of the clients.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return Client::orderBy('created_at', 'desc')->get();
    }

    /**
     * Show the form for creating a new client.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.app');
    }

    /**
     * Store a newly created client in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $errors = $this->validate($request, [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
        ]);
        
        if ($errors) {    
            return response()->json($errors, 400);
        }
        
        $client = new Client($request->except('projectIds'));        
        $client->save();
        
        Project::whereIn('id', $request->projectIds)->update(['client_id' => $client->id]);
        
        return ['notify' => 'The client has been added!'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Return client to edit.
     *
     * @param  \ProjectManager\Client $client
     * @return \ProjectManager\Client
     */
    public function edit(Client $client)
    {
        return $client;
    }

    /**
     * Update the client in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $errors = $this->validate($request, [
            'first_name' => 'required|string',
            'last_name' => 'required|string'
        ]);
        
        if ($errors) {    
            return response()->json($errors, 400);
        }
        
        Client::where('id', $id)->update($request->all());   
        
        return ['notify' => 'The client has been updated!'];
    }

    /**
     * Remove the specified client from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Client::destroy($id);
        
        return ['notify' => 'The client has been deleted!'];
    }
}
