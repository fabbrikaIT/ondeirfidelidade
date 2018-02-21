import { BaseEntity } from '../base/base.model';

export class LoyaltyPointsEntity extends BaseEntity {
    public Id: number = 0;
    public ProgramId:number = 0;
    public PointDate: Date = new Date();

    public static GetInstance(): LoyaltyPointsEntity {
        const instance: LoyaltyPointsEntity = new LoyaltyPointsEntity();
        instance.PointDate = new Date();

        return instance;
    }
}
