import { ReservasModule } from './reservas.module';

describe('ReservasModule', () => {
  let reservasModule: ReservasModule;

  beforeEach(() => {
    reservasModule = new ReservasModule();
  });

  it('should create an instance', () => {
    expect(reservasModule).toBeTruthy();
  });
});
