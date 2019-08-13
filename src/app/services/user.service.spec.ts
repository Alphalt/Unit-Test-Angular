import { TestBed, getTestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/user.interface';

describe('UserService', () => {
  let httpMock: HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('Debe ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar un Observable<User[]>', ()=>{
    let mockUser: User[] = [
      {
        login: "Alphalt2",
        id: 2,
        node_id: "dfsfsfs",
        avatar_url: "sfsfsffs",
        gravatar_id: "",
        url: "sdfsfsfdsf",
        html_url: "zsdfsfsfs",
        followers_url: "sfsffwewrw",
        following_url: "wererwrwrw",
        gists_url: "sfsfsffsfs",
        starred_url: "wrwrwrwrwrw",
        subscriptions_url: "fgdfgdsgds",
        organizations_url: "ehwjefjwf",
        repos_url: "dfsfsfs",
        events_url: "dsfsdfksñfks",
        received_events_url: "jsfnksjfnksfn",
        type: "fsdfsfsfsf",
        site_admin: true
      },
      {
        login: "Alphalt3",
        id: 3,
        node_id: "dfsfsfs",
        avatar_url: "sfsfsffs",
        gravatar_id: "",
        url: "sdfsfsfdsf",
        html_url: "zsdfsfsfs",
        followers_url: "sfsffwewrw",
        following_url: "wererwrwrw",
        gists_url: "sfsfsffsfs",
        starred_url: "wrwrwrwrwrw",
        subscriptions_url: "fgdfgdsgds",
        organizations_url: "ehwjefjwf",
        repos_url: "dfsfsfs",
        events_url: "dsfsdfksñfks",
        received_events_url: "jsfnksjfnksfn",
        type: "fsdfsfsfsf",
        site_admin: true
      }
    ];
    service.getAll().subscribe((users)=>{
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUser);
      expect(users[0].login).toBeDefined();
    });

    const req = httpMock.expectOne('https://api.github.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });
});
