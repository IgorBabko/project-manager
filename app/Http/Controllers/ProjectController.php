<?php

namespace ProjectManager\Http\Controllers;

use Illuminate\Http\Request;

use ProjectManager\Http\Requests;
use ProjectManager\Project;
use ProjectManager\Worker;
use Validator;

class ProjectController extends Controller
{
    /**
     * Return a listing of the projects.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return Project::orderBy('created_at', 'desc')->get();
    }

    /**
     * Show the form for creating a new project.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {   
        return view('backend.app');
    }
    
    /**
     * Get ids of all workers that are attached to the particular project.
     *
     * @return array
     */
    public function workerIds(Project $project)
    {
        return $project->workerIds();
        // return $project->workerIds();
    }

    /**
     * Store a newly created project in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $errors = $this->validate($request, [
            'name' => 'required',
            'budget' => 'required|numeric',
            'description' => 'required'
        ]);
        
        if ($errors) {    
            return response()->json($errors, 400);
        }
        
        $project = new Project($request->except('workerIds'));
        $project->save();
        $project->workers()->sync($request->workerIds);
        
        return ['notify' => 'The project has been created!'];
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
     * Return project to edit.
     *
     * @param  \ProjectManager\Project $project
     * @return \ProjectManager\Project
     */
    public function edit(Project $project)
    {
        return $project;
    }

    /**
     * Update the project in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $errors = $this->validate($request, [
            'name' => 'required',
            'budget' => 'required|numeric',
            'description' => 'required'
        ]);
        
        if ($errors) {    
            return response()->json($errors, 400);
        }
        
        Project::where('id', $id)->update($request->except('workerIds'));   
        
        return ['notify' => 'The project has been updated!'];
    }

    /**
     * Remove the specified project from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Project::destroy($id);
        
        return ['notify' => 'The project has been deleted!'];
    }
}
