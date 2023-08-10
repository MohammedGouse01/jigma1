const j={InvoiceID : '',
Branch : '',
City : '',
Customertype : '',
Gender : '',
Productline : '',
Unitprice : '',
Quantity : '',
Tax5percentage : '',
Total : '',
Date : '',
Time : '',
Payment : '',
cogs : '',
grossMarginPercentage : '',
grossincome  : '',
Rating: ''}



export const SortPanel = ({users, param, setParam}) => {

    return (
        <form action={''}>
            <div>
                <select
                    value={param.Productline}
                    onChange={(evt) =>
                        setParam({
                            ...param,
                            Productline: evt.target.value,
                        })
                    }
                >
                    <option value={''}>Assignee</option>
                    {salesData.map((data) => (
                        <option key={data.id} value={data.id}>
                            {data.name}
                        </option>
                    ))}
                </select> 
            </div>
        </form>
    );
};
