$(function () {
            $( "#grid" ).igGrid( {
                rowTemplate: "<tr>" +
                    "<td> ${FirstName} </td> " +
                    "<td> ${LastName} </td> " +
                    "<td> ${Title} </td> " +
                    "<td> ${BirthDate} </td> " +
                    "<td> <p class='tooltip-grid-notes'> ${Notes} </p> </td>" +
                "</tr>",
                autoGenerateColumns: false,
                width: "100%",
                height: "300px",
                columns: [
                    { headerText: "First Name", key: "FirstName", dataType: "string", width: "10%" },
                    { headerText: "Last Name", key: "LastName", dataType: "string", width: "10%" },
                    { headerText: "Title", key: "Title", dataType: "string", width: "15%" },
                    { headerText: "Birth Date", key: "BirthDate", dataType: "date", width: "10%" },
                    { headerText: "Notes", key: "Notes", dataType: "string", width: "55%" }
                ],
                dataSource: northwind,
                responseDataKey: "results",
                features: [
                    {
                        name: "Tooltips",
                        columnSettings: [
                           { columnKey: "FirstName", allowTooltips: false },
                           { columnKey: "LastName", allowTooltips: false }
                        ],
                        style: "tooltip",
                        cursorLeftOffset: 20,
                        cursorTopOffset: 30,
                        visibility: "always",
                        showDelay: 300,
                        hideDelay: 200
                    }
                ]
            });
        });