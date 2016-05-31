<?php

namespace ProjectManager\Http\Controllers;

use Illuminate\Http\Request;

use ProjectManager\Http\Requests;
use ProjectManager\Worker;
use Validator;

class WorkerController extends Controller
{
    /**
     * Return a listing of the workers.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return Worker::orderBy('created_at', 'desc')->get();
    }

    /**
     * Show the form for creating a new worker.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.app');
    }


    /**
     * Store a newly created worker in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $errors = $this->validate($request, [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'age' => 'required|numeric',
            'salary' => 'required|numeric' 
        ]);
        
        if ($errors) {    
            return response()->json($errors, 400);
        }
        
        $worker = new Worker($request->except('projectIds'));
        $worker->save();
        $worker->projects()->sync($request->projectIds);
        
        return ['notify' => 'The worker has been added!'];
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
     * Return worker to edit.
     *
     * @param  \ProjectManager\Worker $worker
     * @return \ProjectManager\Worker
     */
    public function edit(Worker $worker)
    {
        return $worker;
    }

    /**
     * Update the worker in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $errors = $this->validate($request, [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'age' => 'required|numeric',
            'salary' => 'required|numeric'
        ]);
        
        if ($errors) {    
            return response()->json($errors, 400);
        }
        
        Worker::where('id', $id)->update($request->all());   
        
        return ['notify' => 'The worker has been updated!'];
    }

    /**
     * Remove the specified worker from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Worker::destroy($id);
        
        return ['notify' => 'The worker has been deleted!'];
    }
}
