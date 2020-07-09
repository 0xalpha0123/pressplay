<template>
    <div class="container my-md-5">
        <div class="row ">
            <div class="col-md-6 col-lg-4 mx-auto bg-white p-0">
                <div class="full-screen position-relative visitor-btn-bottom">
                    <div class="playing-box py-3 text-white px-4 position-relative">
                        <div class="play-pause-btn">
                            <a href="#" class="d-block">
                                <img src="./assets/images/play-btn.png" alt="play pause button" />
                             </a>
                        </div>
                        <div class="discography-title text-center text-truncate w-75 mx-auto px-1">
                            now playing
                        </div> 
                        <div class="discography-sub-title text-center text-truncate w-75 mx-auto px-1">
                            your currently on repeat
                        </div> 
                        <div class="discography-img px-2 pt-3">
                            <img src="./assets/images/playing-img.png" alt="discography image">
                        </div>
                        <div class="discography-ans mt-3 pr-5">
                            <h3 class="text-truncate">10 answers</h3>
                        </div>
                        <div class="round-record">
                            <a href="#" class="d-block">
                                <img src="./assets/images/round.png" alt="record image">
                            </a>
                        </div>
                    </div>
                    <div class="view-answer pl-4 py-2 w-75">
                        <p class="text-truncate">view unanswered only</p>
                    </div>

                    <div class="music-body px-3 mt-3">
                        <ul class="m-0 p-0 music-tab-menu position-relative">
                            <li><a href="#">all</a></li>
                            <li class="active"><a href="#">favorites</a></li>
                            <li><a href="#">least favorites</a></li> 
                            <li><a href="#">moods</a></li>
                        </ul>

                        <div class="first-music-list mt-4">
                            <div class="first-music-list-items d-flex py-3 border-bottom">
                                <div class="first-music-list-items-icon col-1 p-0">
                                    <a href="#" class="d-block text-center"> 
                                        <span class="play-list-song">3</span>
                                    </a>
                                </div>
                                <div class="first-music-list-items-name text-capitalize col-9 px-3 w-100">
                                    <h5 class="text-truncate">favorite genres</h5>
                                    <h6 class="text-truncate text-capitalize font-weight-bold mb-0">folk, bluegrass, electronic</h6>
                                </div>
                                <div class="first-music-list-items-icon col-2 p-0 align-self-center">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/dotted-icon.png" class="small-icon" alt="menu icon"/> 
                                    </a>
                                </div>
                            </div>
                            <div class="first-music-list-items d-flex py-3 border-bottom">
                                <div class="first-music-list-items-icon col-1 p-0">
                                    <a href="#" class="d-block text-center"> 
                                        <span class="play-list-song">5</span> 
                                    </a>
                                </div>
                                <div class="first-music-list-items-name text-capitalize col-9 px-3 w-100">
                                    <h5 class="text-truncate">favorite artists</h5>
                                    <h6 class="text-truncate text-capitalize font-weight-bold mb-0">amber lily, tubby love, dust</h6>
                                </div>
                                <div class="first-music-list-items-icon col-2 p-0 align-self-center">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/dotted-icon.png" class="small-icon" alt="menu icon"/> 
                                    </a>
                                </div>
                            </div>
                            <div class="first-music-list-items d-flex py-3 border-bottom">
                                <div class="first-music-list-items-icon col-1 p-0">
                                    <a href="#" class="d-block text-center"> 
                                        <span class="play-list-song">10</span>
                                    </a>
                                </div>
                                <div class="first-music-list-items-name text-capitalize col-9 px-3 w-100">
                                    <h5 class="text-truncate">favorite songs</h5>
                                    <h6 class="text-truncate text-capitalize font-weight-bold mb-0">love will find a way, the matrix</h6>
                                    <p class="text-truncate text-lightgray">mika love, brandi carlile, dustin trans</p>
                                </div>
                                <div class="first-music-list-items-icon col-2 p-0 align-self-center">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/play-icon.png" class="small-icon" alt="menu icon"/> 
                                    </a>
                                </div>
                            </div>
                            
                            <div class="first-music-list-items d-flex py-3 border-bottom">
                                <div class="first-music-list-items-icon col-1 p-0">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/search-purple.png" class="small-icon" alt="search icon"/> 
                                    </a>
                                </div>
                                <div class="first-music-list-items-name text-capitalize col-9 px-3 w-100">
                                    <h5 class="text-truncate">favorite albums</h5>
                                </div>
                                <div class="first-music-list-items-icon col-2 p-0 align-self-center">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/add-yellow.png" class="small-icon" alt="add song"/> 
                                    </a>
                                </div>
                            </div>
                            
                            <div class="first-music-list-items d-flex py-3 border-bottom text-lightgray">
                                <div class="first-music-list-items-icon col-1 p-0">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/search-gray.png" class="small-icon" alt="search icon"/> 
                                    </a>
                                </div>
                                <div class="first-music-list-items-name text-capitalize col-9 px-3 w-100">
                                    <h5 class="text-truncate">air guitar worthy</h5>
                                </div>
                                <div class="first-music-list-items-icon col-2 p-0 align-self-center">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/add-gray.png" class="small-icon" alt="search icon"/> 
                                    </a>
                                </div>
                            </div>
                            <div class="first-music-list-items d-flex py-3 border-bottom text-lightgray">
                                <div class="first-music-list-items-icon col-1 p-0">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/search-gray.png" class="small-icon" alt="search icon"/> 
                                    </a>
                                </div>
                                <div class="first-music-list-items-name text-capitalize col-9 px-3 w-100">
                                    <h5 class="text-truncate">sing-along songs</h5>
                                </div>
                                <div class="first-music-list-items-icon col-2 p-0 align-self-center">
                                    <a href="#" class="d-block text-center"> 
                                        <img src="./assets/images/add-gray.png" class="small-icon" alt="search icon"/> 
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="visitor-box-btn text-center d-block py-3 border-top w-100 bg-white position-fixed">
                            <a href="#" class="text-uppercase d-inline-block mx-auto visitor-btn py-2 px-4 text-white font-weight-bold">view as visitor</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css';
@import "./style.css";
</style>