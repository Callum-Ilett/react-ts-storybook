import { ComponentStory, Meta } from "@storybook/react";
import { Task } from "components";

const meta: Meta = {
  title: "components/task",
  component: Task,
};

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

const Incomplete = Template.bind({});
const Completed = Template.bind({});

Incomplete.args = {
  title: "task 1",
  completed: false,
};

Completed.args = {
  title: "task 1",
  completed: true,
};

export { Incomplete, Completed };

export default meta;
