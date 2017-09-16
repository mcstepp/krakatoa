<?php

namespace App\Http\Controllers;

use File;

class AngularController extends Controller
{
    /** Angular Controller constructor
     *
     * Only serve if authenticated (no guests)
     */

    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Serve the angular application.
     *
     * @return \Illuminate\View\View
     */
    public function serve()
    {
        return File::get(public_path('dist/index.html'));
    }
}
