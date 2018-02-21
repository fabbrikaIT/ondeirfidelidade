import { LoyaltyPointsEntity } from './loyaltyPoints';
import { BaseEntity } from '../base/base.model';

export class LoyaltyProgramEntity extends BaseEntity {

    public Id: number = 0;
    public UserId: number = 0;
    public LoyaltyId: number = 0;
    public RegisterDate: Date = new Date();
    public Discharges: number = 0;
    public CardLink: string = "";
    public Points: Array<LoyaltyPointsEntity>;

    public static GetInstance(): LoyaltyProgramEntity {
        const instance: LoyaltyProgramEntity = new LoyaltyProgramEntity();
        instance.Points = new Array<LoyaltyPointsEntity>();
        instance.RegisterDate = new Date();

        return instance;
    }
}
