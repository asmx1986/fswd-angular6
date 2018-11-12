import { TestBed, async, inject } from '@angular/core/testing';

import { UsuarioLogueadoGuard } from './usuario-logueado.guard';

describe('UsuarioLogueadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioLogueadoGuard]
    });
  });

  it('should ...', inject([UsuarioLogueadoGuard], (guard: UsuarioLogueadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
