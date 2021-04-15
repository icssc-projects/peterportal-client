import React, { useState } from "react";
import "./YearModule.scss";
import { Button, Icon, Popup } from "semantic-ui-react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import produce from "immer";

function YearModule({ index, startYear, courses, units, removeYear, state }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="year-module">
      <Button
        className="accordion"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        <span className="accordion-title">
          <span id="year-title">
            <Icon
              id="accordion-icon"
              name={showContent ? "triangle down" : "triangle right"}
            />
            <span id="year-number">Year {index} </span>
            <span id="year-range">
              ({startYear} - {startYear + 1})
            </span>
          </span>
          <span id="year-stats">
            <span id="course-count">{courses}</span> courses,{" "}
            <span id="unit-count">{units}</span> units
          </span>
        </span>
      </Button>
      <Popup
        content={
          <div>
            <Button className="year-settings-btn">Edit Year</Button>
            <Button
              className="year-settings-btn"
              id="remove-btn"
              onClick={() => {
                removeYear(index);
              }}
            >
              Remove
            </Button>
          </div>
        }
        className="year-settings-popup"
        on="click"
        trigger={<Button className="edit-btn" icon="ellipsis horizontal" />}
        position="bottom center"
      />
      {showContent && (
        <div className="accordion-content">
          {index === 1 && (
            <Droppable droppableId={index + "-fall"} type="COURSE">
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="quarter"
                  >
                    <h2 className="quarter-title">Fall {startYear}</h2>
                    <div className="quarter-units">{units} units</div>
                    {state["1-fall"]?.map((course, index) => {
                      return (
                        <Draggable
                          key={course.id}
                          draggableId={course.id}
                          index={index}
                        >
                          {(provided) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="course">
                                  <div className="name">{course.name}</div>
                                  <div className="title">{course.title}</div>
                                  <div className="units">
                                    {course.units} units
                                  </div>
                                </div>
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          )}
          {index === 1 && (
            <Droppable droppableId={index + "-winter"} type="COURSE">
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="quarter"
                  >
                    <h2 className="quarter-title">Winter {startYear + 1}</h2>
                    <div className="quarter-units">{units} units</div>
                    {state["1-winter"]?.map((course, index) => {
                      return (
                        <Draggable
                          key={course.id}
                          draggableId={course.id}
                          index={index}
                        >
                          {(provided) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="course">
                                  <div className="name">{course.name}</div>
                                  <div className="title">{course.title}</div>
                                  <div className="units">
                                    {course.units} units
                                  </div>
                                </div>
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          )}
          {index === 2 && (
            <Droppable droppableId={index + "-spring"} type="COURSE">
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="quarter"
                  >
                    <h2 className="quarter-title">Spring {startYear + 1}</h2>
                    <div className="quarter-units">{units} units</div>
                    {state["2-spring"]?.map((course, index) => {
                      return (
                        <Draggable
                          key={course.id}
                          draggableId={course.id}
                          index={index}
                        >
                          {(provided) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="course">
                                  <div className="name">{course.name}</div>
                                  <div className="title">{course.title}</div>
                                  <div className="units">
                                    {course.units} units
                                  </div>
                                </div>
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          )}
        </div>
      )}
    </div>
  );
}

export default YearModule;

// const dragReducer = produce((draft, action) => {
//   switch (action.type) {
//     case "MOVE": {
//       draft[action.from] = draft[action.from] || [];
//       draft[action.to] = draft[action.to] || [];
//       const [removed] = draft[action.from].splice(action.fromIndex, 1);
//       draft[action.to].splice(action.toIndex, 0, removed);
//     }
//   }
// });

// function YearModule({ index, startYear, courses, units, removeYear }) {
//   const [showContent, setShowContent] = useState(false);
//   const [state, dispatch] = useReducer(dragReducer, { items: data, items1: data1, items2: data2 });

//   const onDragEnd = useCallback((result) => {
//     if (result.reason === "DROP") {
//       if (!result.destination) {
//         return;
//       }
//       dispatch({
//         type: "MOVE",
//         from: result.source.droppableId,
//         to: result.destination.droppableId,
//         fromIndex: result.source.index,
//         toIndex: result.destination.index,
//       });
//     }
//   }, []);

//   return (
//     <div className="year-module">
//       <Button
//         className="accordion"
//         onClick={() => {
//           setShowContent(!showContent);
//         }}
//       >
//         <span className="accordion-title">
//           <span id="year-title">
//             <Icon
//               id="accordion-icon"
//               name={showContent ? "triangle down" : "triangle right"}
//             />
//             <span id="year-number">Year {index} </span>
//             <span id="year-range">
//               ({startYear} - {startYear + 1})
//             </span>
//           </span>
//           <span id="year-stats">
//             <span id="course-count">{courses}</span> courses,{" "}
//             <span id="unit-count">{units}</span> units
//           </span>
//         </span>
//       </Button>
//       <Popup
//         content={
//           <div>
//             <Button className="year-settings-btn">Edit Year</Button>
//             <Button
//               className="year-settings-btn"
//               id="remove-btn"
//               onClick={() => {
//                 removeYear(index);
//               }}
//             >
//               Remove
//             </Button>
//           </div>
//         }
//         className="year-settings-popup"
//         on="click"
//         trigger={<Button className="edit-btn" icon="ellipsis horizontal" />}
//         position="bottom center"
//       />
//       {showContent && (
//         <div className="accordion-content">
//           <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable droppableId="items" type="COURSE">
//               {(provided) => {
//                 return (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                     className="quarter"
//                   >
//                     <h2 className="quarter-title">Fall {startYear}</h2>
//                     <div className="quarter-units"> 16 units</div>
//                     {state.items?.map((course, index) => {
//                       return (
//                         <Draggable
//                           key={course.id}
//                           draggableId={course.id}
//                           index={index}
//                         >
//                           {(provided) => {
//                             return (
//                               <div
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                               >
//                                 <div className="course">
//                                   <div className="name">
//                                     {course.name}
//                                   </div>
//                                   <div className="title">
//                                     {course.title}
//                                   </div>
//                                   <div className="units">
//                                     {course.units} units
//                                   </div>
//                                 </div>
//                               </div>
//                             );
//                           }}
//                         </Draggable>
//                       );
//                     })}
//                     {provided.placeholder}
//                   </div>
//                 );
//               }}
//             </Droppable>
//             <Droppable droppableId="items1" type="COURSE">
//               {(provided) => {
//                 return (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                     className="quarter"
//                   >
//                     <h2 className="quarter-title">Winter {startYear+1}</h2>
//                     <div className="quarter-units"> 16 units</div>
//                     {state.items1?.map((course, index) => {
//                       return (
//                         <Draggable
//                           key={course.id}
//                           draggableId={course.id}
//                           index={index}
//                         >
//                           {(provided) => {
//                             return (
//                               <div
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                               >
//                                 <div className="course">
//                                   <div className="name">
//                                     {course.name}
//                                   </div>
//                                   <div className="title">
//                                     {course.title}
//                                   </div>
//                                   <div className="units">
//                                     {course.units} units
//                                   </div>
//                                 </div>
//                               </div>
//                             );
//                           }}
//                         </Draggable>
//                       );
//                     })}
//                     {provided.placeholder}
//                   </div>
//                 );
//               }}
//             </Droppable>
//             <Droppable droppableId="items2" type="COURSE">
//               {(provided) => {
//                 return (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                     className="quarter"
//                   >
//                     <h2 className="quarter-title">Spring {startYear+1}</h2>
//                     <div className="quarter-units"> 16 units</div>
//                     {state.items2?.map((course, index) => {
//                       return (
//                         <Draggable
//                           key={course.id}
//                           draggableId={course.id}
//                           index={index}
//                         >
//                           {(provided) => {
//                             return (
//                               <div
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                               >
//                                 <div className="course">
//                                   <div className="name">
//                                     {course.name}
//                                   </div>
//                                   <div className="title">
//                                     {course.title}
//                                   </div>
//                                   <div className="units">
//                                     {course.units} units
//                                   </div>
//                                 </div>
//                               </div>
//                             );
//                           }}
//                         </Draggable>
//                       );
//                     })}
//                     {provided.placeholder}
//                   </div>
//                 );
//               }}
//             </Droppable>
//           </DragDropContext>
//         </div>
//       )}
//     </div>
//   );
// }

// export default YearModule;