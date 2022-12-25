"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=666,exports.ids=[666],exports.modules={78666:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DocsModule:()=>DocsModule});var shared_module=__webpack_require__(69947),router=__webpack_require__(14195),cjs=__webpack_require__(25095),core=__webpack_require__(40305),http_service=__webpack_require__(79450);class DocsService{constructor(httpService){this.httpService=httpService,this._faqs=new cjs.ReplaySubject(1),this._guides=new cjs.ReplaySubject(1),this._guide=new cjs.ReplaySubject(1)}get faqs$(){return this._faqs.asObservable()}get guides$(){return this._guides.asObservable()}get guide$(){return this._guide.asObservable()}getAllFaqs(){return this.httpService.get("api/apps/help-center/faqs").pipe((0,cjs.tap)(response=>{this._faqs.next(response)}))}getFaqsByCategory(slug){return this.httpService.get("api/apps/help-center/faqs",{params:{slug}}).pipe((0,cjs.tap)(response=>{this._faqs.next(response)}))}getAllGuides(limit="4"){return this.httpService.get("api/apps/help-center/guides",{params:{limit}}).pipe((0,cjs.tap)(response=>{this._guides.next(response)}))}getGuidesByCategory(slug){return this.httpService.get("api/apps/help-center/guides",{params:{slug}}).pipe((0,cjs.tap)(response=>{this._guides.next(response)}))}getGuide(categorySlug,guideSlug){return this.httpService.get("api/apps/help-center/guide",{params:{categorySlug,guideSlug}}).pipe((0,cjs.tap)(response=>{this._guide.next(response)}))}}__name(DocsService,"DocsService"),DocsService.\u0275fac=__name(function(t){return new(t||DocsService)(core.LFG(http_service.O))},"DocsService_Factory"),DocsService.\u0275prov=core.Yz7({token:DocsService,factory:DocsService.\u0275fac,providedIn:"root"});var common=__webpack_require__(89318),expansion=__webpack_require__(37910),icon=__webpack_require__(6373);function DocsComponent_ng_container_52_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.TgZ(1,"mat-expansion-panel")(2,"mat-expansion-panel-header",21)(3,"mat-panel-title"),core._uU(4),core.qZA()(),core._uU(5),core.qZA(),core.BQk()),2&rf){const faq_r1=ctx.$implicit;core.xp6(2),core.Q6J("collapsedHeight","56px"),core.xp6(2),core.Oqu(faq_r1.question),core.xp6(1),core.hij(" ",faq_r1.answer," ")}}__name(DocsComponent_ng_container_52_Template,"DocsComponent_ng_container_52_Template");const _c0=__name(function(){return["faqs"]},"_c0"),_c1=__name(function(){return["guides"]},"_c1"),_c2=__name(function(){return["support"]},"_c2");class DocsComponent{constructor(docsService){this.docsService=docsService,this._unsubscribeAll=new cjs.Subject}ngOnInit(){this.docsService.faqs$.pipe((0,cjs.takeUntil)(this._unsubscribeAll)).subscribe(faqCategories=>{this.faqCategory=faqCategories[0]})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(index,item){return item.id||index}}__name(DocsComponent,"DocsComponent"),DocsComponent.\u0275fac=__name(function(t){return new(t||DocsComponent)(core.Y36(DocsService))},"DocsComponent_Factory"),DocsComponent.\u0275cmp=core.Xpm({type:DocsComponent,selectors:[["app-docs"]],decls:53,vars:11,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"relative","pt-8","pb-28","px-4","sm:pt-20","sm:pb-48","sm:px-16","overflow-hidden"],[1,"z-10","relative","flex","flex-col","items-center"],[1,"text-xl","font-semibold"],[1,"mt-1","text-4xl","sm:text-7xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"mt-3","sm:text-2xl","text-center","tracking-tight","text-secondary"],[1,"flex","flex-col","items-center","pb-6","px-6","sm:pb-10","sm:px-10"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-y-8","md:gap-y-0","md:gap-x-6","w-full","max-w-sm","md:max-w-4xl","-mt-16","sm:-mt-24"],[1,"relative","flex","flex-col","rounded-2xl","shadow","hover:shadow-lg","overflow-hidden","bg-card","transition-shadow","ease-in-out","duration-150"],[1,"flex","flex-col","flex-auto","items-center","p-8","text-center"],[1,"text-2xl","font-semibold"],[1,"md:max-w-40","mt-1","text-secondary"],[1,"flex","items-center","justify-center","py-4","px-8","text-primary-500","dark:text-primary-400","bg-gray-50","dark:bg-transparent","dark:border-t"],[1,"flex","items-center",3,"routerLink"],[1,"absolute","inset-0"],[1,"font-medium"],[1,"ml-2","icon-size-5","text-current",3,"svgIcon"],[1,"mt-24","text-3xl","sm:text-5xl","font-extrabold","leading-tight","tracking-tight","text-center"],[1,"mt-2","text-xl","text-center","text-secondary"],[1,"max-w-4xl","mt-12"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"collapsedHeight"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),core._uU(4,"HELP CENTER"),core.qZA(),core.TgZ(5,"div",4),core._uU(6," How can we help you today? "),core.qZA(),core.TgZ(7,"div",5),core._uU(8," Search for a topic or question, check out our FAQs and guides, contact us for detailed support "),core.qZA()()(),core.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10),core._uU(14,"User Guides"),core.qZA(),core.TgZ(15,"div",11),core._uU(16,"Everything you need to know, in order to get going on our platform."),core.qZA()(),core.TgZ(17,"div",12)(18,"a",13),core._UZ(19,"span",14),core.TgZ(20,"span",15),core._uU(21,"Go to FAQs"),core.qZA(),core._UZ(22,"mat-icon",16),core.qZA()()(),core.TgZ(23,"div",8)(24,"div",9)(25,"div",10),core._uU(26,"Guides"),core.qZA(),core.TgZ(27,"div",11),core._uU(28,"Articles and resources to guide you"),core.qZA()(),core.TgZ(29,"div",12)(30,"a",13),core._UZ(31,"span",14),core.TgZ(32,"span",15),core._uU(33,"Check guides"),core.qZA(),core._UZ(34,"mat-icon",16),core.qZA()()(),core.TgZ(35,"div",8)(36,"div",9)(37,"div",10),core._uU(38,"Support"),core.qZA(),core.TgZ(39,"div",11),core._uU(40,"Contact us for more detailed support"),core.qZA()(),core.TgZ(41,"div",12)(42,"a",13),core._UZ(43,"span",14),core.TgZ(44,"span",15),core._uU(45,"Contact us"),core.qZA(),core._UZ(46,"mat-icon",16),core.qZA()()()(),core.TgZ(47,"div",17),core._uU(48,"Most frequently asked questions"),core.qZA(),core.TgZ(49,"div",18),core._uU(50,"Here are the most frequently asked questions you may check before getting started"),core.qZA(),core.TgZ(51,"mat-accordion",19),core.YNc(52,DocsComponent_ng_container_52_Template,6,3,"ng-container",20),core.qZA()()()),2&rf&&(core.xp6(18),core.Q6J("routerLink",core.DdM(8,_c0)),core.xp6(4),core.Q6J("svgIcon","heroicons_solid:arrow-narrow-right"),core.xp6(8),core.Q6J("routerLink",core.DdM(9,_c1)),core.xp6(4),core.Q6J("svgIcon","heroicons_solid:arrow-narrow-right"),core.xp6(8),core.Q6J("routerLink",core.DdM(10,_c2)),core.xp6(4),core.Q6J("svgIcon","heroicons_solid:arrow-narrow-right"),core.xp6(6),core.Q6J("ngForOf",ctx.faqCategory.faqs)("ngForTrackBy",ctx.trackByFn))},"DocsComponent_Template"),dependencies:[common.sg,expansion.pp,expansion.ib,expansion.yz,expansion.yK,icon.Hw,router.rH]});const docsRouting=[{path:"",component:DocsComponent}];class DocsModule{}__name(DocsModule,"DocsModule"),DocsModule.\u0275fac=__name(function(t){return new(t||DocsModule)},"DocsModule_Factory"),DocsModule.\u0275mod=core.oAB({type:DocsModule}),DocsModule.\u0275inj=core.cJS({imports:[shared_module.m,router.Bz.forChild(docsRouting)]})}};