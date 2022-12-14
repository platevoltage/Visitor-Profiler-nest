import {
    Controller,
    Get,
    HttpStatus,
    Query,
    Res,
} from "@nestjs/common";
import { Op } from "sequelize";
import { Visitor } from "../models/visitor.model";
import { VisitorsService } from "../services/visitors.service";
  
@Controller("data")
export class DataController {
    constructor(private readonly libraryService: VisitorsService) {}
  
    @Get()
    async findAllAndParse(@Query() query, @Res() res) {
        const responseData = [];

        const hidden = (query.showHidden === "true");
        const visitors = await this.libraryService.findAll({
            where: { hidden },
            raw: true,
        });
   
        for (const visitor of visitors) {
            const otherVisits = await this.libraryService.findAll({
                where: { 
                    ip: visitor.ip,
                    id: { [Op.not]: visitor.id }
                },
                raw: true,
            });
    
            const object = this.parseData(visitor, otherVisits);
     
            if (!(visitor["from"]?.includes("bot") || object["userAgent"]?.includes("Expanse"))) {
                responseData.push(object);
            }
        }
        
        return res.status(HttpStatus.OK).json(responseData);
    }
  

    private parseData(visitor: Visitor, otherVisits?: Visitor[]) {
        let data: object;
        try {
            data = {
                hidden: visitor.hidden,
                id: visitor.id,
                ip: visitor.ip,
                time: visitor.created_at.toLocaleString(),
                unixTime: visitor.created_at.getTime(),  
            };
            return {
                ...data,
                userAgent: visitor.data["user-agent"],
                city: visitor.data["location"]["city"],
                region: visitor.data["location"]["region"],
                country: `${visitor.data["location"]["country_name"]}`,
                flag: `${visitor.data["location"]["emoji_flag"]}`,
                otherVisits: otherVisits?.map( (visit: Visitor ) => {
                    return this.parseData(visit);
                })
            };
            
        } catch {
            console.error("Parsing Error");
            return data;
        }
    }
}
  