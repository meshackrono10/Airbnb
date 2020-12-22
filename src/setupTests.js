import { DateRangePicker } from "react-date-range";

class Search extends React.Component {
  handleSelect(ranges) {
    console.log(ranges);
  }
  render() {
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    };
    return (
      <div className="search">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={this.handleSelect}
        />
        <h2>
          Number of guests
          <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number" />
        <Button>Search Airbnb</Button>{" "}
      </div>
    );
  }
}
export default Search;
