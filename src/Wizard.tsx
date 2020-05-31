import React from "react";

import styled from "@emotion/styled";

const log = (data: any, message = "[LOG]: ", type: (keyof Console) = "log") => {
	console[type](message, data);
	return data;
};

let StyledList = styled.ul<{ step: number }>(props => ({
	margin: "0px",
	padding: "0px",
	display: "flex",
	flexDirection: "row",
	transform: `translateX(-${100 * (props.step - 1)}%)`,
	transition: "transform 0.4s linear"
}));

const StyledListItem = styled.li<{ style?: React.CSSProperties }>(props => ({
	...props.style,
	minWidth: "100%",
	height: "325px",
	display: "flex",
	flexDirection: "column",
	marginTop: 20
}));

interface WizardState {
	step: number;
	totalSteps: number;
};

interface ChildrenParams extends WizardState {
	nextStep: () => void;
	previousStep: () => void;
};

interface WizardContainerProps extends Pick<WizardState, "step"> {
	children: React.ReactNode;
};

interface WizardItemProps {
	children: React.ReactNode;
	styles?: object;
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
			step: 1,
			totalSteps: 4
		};
	}

	componentDidMount () {
		this.setState(({ step, totalSteps }, { initialStep }) => ({
			step: initialStep || step,
			totalSteps
		}));
	};

	nextStep = () => {
		this.setState(({ step, totalSteps }) => ({
			step: step === totalSteps ? 1 : step + 1
		}));
	};

	previousStep = () => {
		this.setState(({ step, totalSteps }) => ({
			step: step === 1 ? step : step - 1
		}));
	};

	render () {
		const childrenParams: ChildrenParams = {
			step: this.state.step,
			nextStep: this.nextStep,
			previousStep: this.previousStep,
			totalSteps: this.state.totalSteps
		};

		return (
			<React.Fragment>
				{ this.props.children(childrenParams) }
			</React.Fragment>
		);
	};

	static Container = ({ children, step }: WizardContainerProps) => (
		<div style={ { overflow: "hidden", width: "100%" } }>
			<StyledList step={ step }>
				{ children }
			</StyledList>
		</div>
	);

	static Item = ({ children, styles }: WizardItemProps) => (
		<StyledListItem style={ styles }>
			{ children }
		</StyledListItem>
	);
};

export default Wizard;