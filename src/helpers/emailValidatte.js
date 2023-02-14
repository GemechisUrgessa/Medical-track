export let validateEmail = (email)=> {
    const emailParts = email.split('@');

    if (emailParts.length !== 2) {
        return false;
    }

    const [username, domain] = emailParts;

    if (username.length === 0 || domain.length === 0) {
        return false;
    }

    const domainParts = domain.split('.');

    if (domainParts.length < 2) {
        return false;
    }

    for (const part of domainParts) {
        if (part.length === 0) {
            return false;
        }
    }

    return true;
}