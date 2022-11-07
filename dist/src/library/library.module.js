"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const library_controller_1 = require("./controllers/library.controller");
const visitor_model_1 = require("./models/visitor.model");
const library_service_1 = require("./services/library.service");
let LibraryModule = class LibraryModule {
};
LibraryModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([visitor_model_1.Visitor])],
        providers: [library_service_1.LibraryService],
        controllers: [library_controller_1.LibraryController],
    })
], LibraryModule);
exports.LibraryModule = LibraryModule;
//# sourceMappingURL=library.module.js.map