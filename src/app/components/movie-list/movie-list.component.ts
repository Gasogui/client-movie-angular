/* movie - list.component.ts */
import { Component, OnInit, HostBinding } from '@angular/core';

import { MoviesService } from '../../services/movies.service';


@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
