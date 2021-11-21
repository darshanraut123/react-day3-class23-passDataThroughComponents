import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (

        //It is a sidebar component which will be visible to the user all the time.
        //User can click Dashboard , Add Student & All Student tabs to navigate to those routes
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr class="sidebar-divider my-0" />

            <li class="nav-item active">
                {/*This is dashboard component router. When user clicks this link the context gets redirected to dashboard route */}
                <Link to='/dashboard'>
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </Link>
            </li>

            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Interface
            </div>

            <li class="nav-item">
                {/*This is Addstudent component router. When user clicks this link the context gets redirected to addstudent route */}
                <Link to='/addstudent'>
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Add Student</span></a>
                </Link>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" href="buttons.html">Buttons</a>
                        <a class="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            <li class="nav-item">
                {/*This is Allstudent component router. When user clicks this link the context gets redirected to allstudents route */}
                <Link to='/allstudents'>
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>All Students</span></a>
                </Link>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <a class="collapse-item" href="utilities-color.html">Colors</a>
                        <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>



        </ul>

    );



}

