import React from "react";

import { Button } from "../../shared/components/Button";

export const AuthButton: React.FC<{}> = () => (
    <Button
        styles={ styles }
        size="small"
        title="Sign In/Sign Up"
    />
);

const styles = {
    alignSelf: "flex-end"
}