<?php

namespace ProjectManager\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Validator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs;
    
    public function validate(Request $request, $rules)
    {
        $validator = Validator::make($request->all(), $rules);
        
        return $validator->errors()->all();
    }
}
