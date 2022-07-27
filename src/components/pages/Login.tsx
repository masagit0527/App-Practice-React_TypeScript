import { ChangeEvent, memo, useState, VFC } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimmaryButton } from "../atoms/buttons/PrimmaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="ld" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimmaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimmaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});