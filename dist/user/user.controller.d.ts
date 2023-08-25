import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    setDate(unixtime: number): number;
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): string;
    searchUser(list: any): void;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
