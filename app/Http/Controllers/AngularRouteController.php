<?php

namespace ProjectManager\Http\Controllers;

use ProjectManager\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Debugbar;
use ProjectManager\Project;

class AngularRouteController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Default action for all Angular 2 routes
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('backend.app');
    }
}