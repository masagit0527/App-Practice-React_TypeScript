import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import {
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";
import { PrimmaryButton } from "../../atoms/buttons/PrimmaryButton";

type Props = {
	user: User | null;
	isOpen: boolean;
	isAdmin?: boolean;
	onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
	const { user, isOpen, isAdmin = false, onClose } = props;

	const [username, setUserName] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		setUserName(user?.username ?? "");
		setName(user?.name ?? "");
		setEmail(user?.email ?? "");
		setPhone(user?.phone ?? "");
	}, [user]);

	const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
		setUserName(e.target.value);
	const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);
	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
		setPhone(e.target.value);

	const onClickUpdate = () => alert("更新");

	return (
		<Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
			<ModalOverlay />
			<ModalContent pb={4}>
				<ModalHeader>ユーザー詳細</ModalHeader>
				<ModalCloseButton />
				<ModalBody mx={4}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>名前</FormLabel>
							<Input
								value={username}
								onChange={onChangeUserName}
								isReadOnly={!isAdmin}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>フルネーム</FormLabel>
							<Input
								value={name}
								onChange={onChangeName}
								isReadOnly={!isAdmin}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>E-Mail</FormLabel>
							<Input
								value={email}
								onChange={onChangeEmail}
								isReadOnly={!isAdmin}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>TEL</FormLabel>
							<Input
								value={phone}
								onChange={onChangePhone}
								isReadOnly={!isAdmin}
							/>
						</FormControl>
					</Stack>
				</ModalBody>
				{isAdmin && (
					<ModalFooter>
						<PrimmaryButton onClick={onClickUpdate}>更新</PrimmaryButton>
					</ModalFooter>
				)}
			</ModalContent>
		</Modal>
	);
});
