import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../store/actions";

const Footer = () => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETE}>Completed</FilterLink>
  </p>
);

export default Footer;
