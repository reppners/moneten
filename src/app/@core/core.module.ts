import {NgModule, Optional, SkipSelf} from "@angular/core";
import {PersistencyService} from "./persistency.service";

export class EnsureModuleLoadedOnceGuard {
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
    }
  }
}

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    PersistencyService,
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
