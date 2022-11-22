import { Profile } from "src/profiles/interfaces/profile.interface";

export const profileStub = (): Profile => {
    return {
        firstName: 'lol',
        lastName: 'lol2',
        email: 'lol@lol.dk',
        password: '1234'    
    }
}