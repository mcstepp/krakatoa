import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.scss']
})
export class ForumViewComponent implements OnInit {

  threads: Object[] = [
      {name: 'Thread Titles 1',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'},
      {name: 'Thread Titles 2',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'},
      {name: 'Thread Titles 3',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'},
      {name: 'Thread Titles 4',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'},
      {name: 'Thread Titles 5',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'},
      {name: 'Thread Titles 6',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'},
      {name: 'Thread Titles 7',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'},
      {name: 'Thread Titles 8',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'},
      {name: 'Thread Titles 9',
          description: 'Aliquam enim turpis, facilisis at dapibus a.',
          author: 'John Doe Ray'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
