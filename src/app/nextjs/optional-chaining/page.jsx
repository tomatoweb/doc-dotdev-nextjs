import { Typography } from "@mui/material";
import Dangerous from '@mui/icons-material/Dangerous';
import CodeBlock from "@/app/components/CodeBlock";

const page = () => {

const text = `const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined`;

	return (
		<div className='overflow-x-auto text-sm'>
			<div className="flex flex-col mt-5">
				<Typography variant="h5" sx={{ fontWeight: '600' }} mb={1}>
					?.  
				</Typography>
				<Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
					Optional chaining
				</Typography>
			</div>
			<Typography variant="body1" mb={1}>
				<span className="text-red-500">
                    <Dangerous />
                </span>
				{`Does not work on non-declared Object`}
			</Typography>
			<CodeBlock text={`undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined`}/>
			<Typography variant="body1" mb={4}>
				{`Instead of throwing an error, the optional chaining (?.) operator, when trying to access an object's property or trying to call an object's function, 
                if the object accessed or function called using this operator is undefined or null ( ! but well declared) , 
                the expression short circuits and evaluates to undefined .`}
			</Typography>
			<CodeBlock text={text}/>
		</div>
	)
}

export default page