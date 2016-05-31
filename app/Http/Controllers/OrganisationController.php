<?php

namespace ProjectManager\Http\Controllers;

use Illuminate\Http\Request;

use ProjectManager\Http\Requests;
use ProjectManager\Organisation;
use ProjectManager\Project;
use Validator;

class OrganisationController extends Controller
{
    /**
     * Return a listing of the organisations.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return Organisation::orderBy('created_at', 'desc')->get();
    }
    
    /**
     * Get ids of all clients that are attached to the particular organisation.
     *
     * @return array
     */
    public function clientIds(Organisation $organisation)
    {
        return $organisation->projectIds();
    }

    /**
     * Show the form for creating a new organisation.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.app');
    }

    /**
     * Store a newly created organisation in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $errors = $this->validate($request, [
            'required' => 'required|string',
        ]);
        
        if ($errors) {    
            return response()->json($errors, 400);
        }
        
        $organisation = new Organisation($request->except('clientIds'));
        $organisation->save();
        
        Client::whereIn('id', $request->clientIds ?? [])->update(['organisation_id' => $organisation->id]);
        
        return ['notify' => 'The organisation has been added!'];
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
     * Return organisation to edit.
     *
     * @param  \ProjectManager\Organisation $organisation
     * @return \ProjectManager\Organisation
     */
    public function edit(organisation $organisation)
    {
        return $organisation;
    }

    /**
     * Update the organisation in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $errors = $this->validate($request, [
            'name' => 'required|string',
        ]);
        
        if ($errors) {    
            return response()->json($errors, 400);
        }
        
        Organisation::find($id)->update(
            $request->except('clientIds'),
            $request->clientIds ?? []
        );
        
        return ['notify' => 'The organisation has been updated!'];
    }

    /**
     * Remove the specified organisation from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Organisation $organisation)
    {
        $organisation->delete();
        
        return ['notify' => 'The organisation has been deleted!'];
    }
}
