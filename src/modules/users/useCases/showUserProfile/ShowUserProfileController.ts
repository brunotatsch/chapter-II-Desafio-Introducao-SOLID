import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id: string } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id: string });

      return response.json(user);
      
    } catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
    

  }
}

export { ShowUserProfileController };
