import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    
    const userIsAdmin = this.usersRepository.findById(user_id);

    console.log(userIsAdmin.isAdmin);
    console.log(userIsAdmin);
    
    if (!userIsAdmin.isAdmin) {
      throw new Error("Only admins can list all users");
    }

    const users = this.usersRepository.list();

    return users;

  }
}

export { ListAllUsersUseCase };
