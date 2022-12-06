import { Form } from "@components/form/Form"
import { LakeBoard } from "@components/lake-board/LakeBoard"
import { styled, theme } from "@/stitches.config"

const SDiv = styled("div", {
	heigth: "100%",
	width: "14vw",
	minWidth: "250px",
	display: "flex",
	flexDirection: "column",
	backgroundColor: "$background",
	padding: theme.space.sm,
})

export const Dashboard = ({ canvas }) => {
	return (
		<SDiv>
			<LakeBoard />
			<Form canvas={canvas} />
		</SDiv>
	)
}
