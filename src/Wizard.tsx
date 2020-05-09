import React from "react";

import styled from "@emotion/styled";

const log = (data: any, message = "[LOG]: ", type: (keyof Console) = "log") => {
	console[type](message, data);
	return data;
};

let StyledList = styled.ul<{ currentStep: number }>(props => ({
	margin: "0px",
	padding: "0px",
	display: "flex",
	flexDirection: "row",
	transform: `translateX(-${100 * (props.currentStep - 1)}%)`,
	transition: "transform 0.4s linear"
}));

const StyledListItem = styled.li<{ style?: React.CSSProperties }>(props => ({
	...props.style,
	minWidth: "100%",
	height: "400px",
	display: "flex",
	flexDirection: "column"
}));

const StyledChild = styled.div({
	color: "white",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	margin: "0px"
});


interface WizardState {
	currentStep: number;
	totalSteps: number;
};

interface ChildrenParams extends WizardState {
	nextStep: () => void;
};

interface WizardContainerProps extends Pick<WizardState, "currentStep"> {
	children: React.ReactNode;
};

interface WizardItemProps {
	children: React.ReactNode;
	styles?: object;
	title?: string;
};

interface WizardProps {
	children: (params: ChildrenParams) => React.ReactNode;
	initialStep?: number;
	styles?: React.CSSProperties;
};

class Wizard extends React.Component<WizardProps, WizardState> {
	constructor(props: WizardProps) {
		super(props);
		this.state = {
			currentStep: 1,
			totalSteps: 4
		};
	}

	componentDidMount () {
		this.setState(({ currentStep, totalSteps }, { initialStep }) => ({
			currentStep: initialStep || currentStep,
			totalSteps
		}));
	};

	nextStep = () => {
		this.setState(({ currentStep, totalSteps }) => ({
			currentStep: currentStep === totalSteps ? 1 : currentStep + 1
		}));
	};

	render () {
		const childrenParams: ChildrenParams = {
			currentStep: this.state.currentStep,
			nextStep: this.nextStep,
			totalSteps: this.state.totalSteps
		};

		return (
			<React.Fragment>
				{ this.props.children(childrenParams) }
			</React.Fragment>
		);
	};

	static Container = ({ children, currentStep }: WizardContainerProps) => (
		<div style={ { overflow: "hidden", width: "auto" } }>
			<StyledList currentStep={ currentStep }>
				{ children }
			</StyledList>
		</div>
	);

	static Item = ({ children, styles, title }: WizardItemProps) => (
		<StyledListItem style={ styles }>
			{
				title &&
				<p style={ { fontWeight: "bold", color: "white" } }>
					{ title }
				</p>
			}
			<StyledChild>
				{ children }
			</StyledChild>
		</StyledListItem>
	);
};

export default Wizard;