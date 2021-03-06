<?php

namespace ProjectManager\Http\Controllers;

use ProjectManager\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AngularTemplateController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Default action for all Angular 2 templates
     *
     * @param $template
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index($template)
    {
        $templatePath = 'frontend.' . $template;

        if (!view()->exists($templatePath)) {
            throw new NotFoundHttpException();
        }

        return view($templatePath);
    }
}
