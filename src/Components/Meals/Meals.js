import { Fragment } from "react";
import MealsSummary from "./MealsSummery";
import AvailabelaMeals from "./AvailabelsMeals";
const Meals=()=>{
    return <Fragment>
        <MealsSummary/>
        <AvailabelaMeals/>
    </Fragment>
}
export default Meals;