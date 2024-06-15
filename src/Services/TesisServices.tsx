import { TesisApi } from "../Api/TesisApi";

export interface CreateProject {
    name?: string,
    area?: string,
    methodologyId?: number,
    responsiblePosition?: string,
    developmentType?: string,
    testingHours?: number,
    deploymentTime?: number,
    startDate?: Date
}