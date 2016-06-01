<?php

namespace ProjectManager\Http\Controllers;

use Illuminate\Http\Request;

use ProjectManager\Http\Requests;
use ProjectManager\Client;
use ProjectManager\Project;
use Validator;

class WorkingHoursController extends Controller
{
    /**
     * Return a listing of the working hours.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return WorkingHours::orderBy('created_at', 'desc')->get();
    }

    /**
     * Show the form for creating a new working hours item.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.app');
    }

    /**
     * Store a newly created working hours item in storage.
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
        
        $workingHours = new WorkingHours($request->all());
        $workingHours->save();
        
        $worknigHours->user()->associates();
        
        Client::whereIn('id', $request->clientIds ?? [])->update(['organisation_id' => $organisation->id]);
        
        // $client = new WorkingHours($request->except('projectIds'));
        // $client->save();
        
        // Project::whereIn('id', $request->projectIds ?? [])->update(['client_id' => $client->id]);
        
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
        
        Client::find($id)->update(
            $request->except('projectIds'),
            $request->projectIds ?? []
        );
        
        return ['notify' => 'The client has been updated!'];
    }

    /**
     * Remove the specified client from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Client $client)
    {
        $client->delete();
        
        return ['notify' => 'The client has been deleted!'];
    }
}
