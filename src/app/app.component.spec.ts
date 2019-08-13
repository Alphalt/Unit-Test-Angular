import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './services/user.service';
import { of } from 'rxjs';
import { User } from './models/user.interface';

describe('AppComponent', () => {
  let appComponent;
  let servicio;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        UserService,
        AppComponent
      ]
    }).compileComponents();
    appComponent = TestBed.get(AppComponent);
    servicio = TestBed.get(UserService);
  }));

  afterEach(()=> {
    console.log("En el afterEach!!");
  });

  afterAll(()=>{
    console.log("Después de todas las pruebas!!");
  });

  beforeAll(()=> {
    console.log("Antess de todas las pruebas!!");
  });

  it('Debería crear el componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('El valor de myVar debe ser Hola Mundo', () => {
    const valor = appComponent.myVar;
    expect(valor).toEqual('Hola Mundo');
  });

  it('La variable saludo debe contener Camila', () => {
    const valor = appComponent.saludo;
    expect(valor).toContain('Camila');
  });

  it('Debe retornar TRUE', ()=> {
    const respuesta = appComponent.par(44);
    expect(respuesta).toBeTruthy();
  });

  it('Debe retornar FALSE', ()=> {
    const respuesta = appComponent.par(45);
    expect(respuesta).toBeFalsy();
  });

  it('Debe llamar a UserService y el método GetAll()', ()=> {
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
    const users = spyOn(servicio, 'getAll').and.callFake(users =>{
      return of(mockUser);
    });

    appComponent.ngOnInit();
    expect(users).toHaveBeenCalled();
  });
});
