'use client'

interface SelectorProps {
    selectedYear: number
    selectedDepartment: string
    setSelectedYear: (year: number) => void
    setSelectedDepartment: (department: string) => void
}

const Selector: React.FC<SelectorProps> = ({
    selectedYear,
    selectedDepartment,
    setSelectedYear,
    setSelectedDepartment,
}) => {
    const handleYearChange = (year: number) => {
        if (year === selectedYear) {
            setSelectedYear(0)
        } else {
            setSelectedYear(year)
        }
    }

    const handleDepartmentChange = (department: string) => {
        if (department === selectedDepartment) {
            setSelectedDepartment('')
        } else {
            setSelectedDepartment(department)
        }
    }

    const years = [
        { val: 1, display: '‍🍼 1st Year' },
        { val: 2, display: '👦 2nd Year' },
        { val: 3, display: '👩 3rd Year' },
        { val: 4, display: '👴 4th Year' },
        { val: 5, display: '⚰️ 5th Year+' },
    ]
    const departments = [
        { val: 'academic', display: '📚 Academic' },
        { val: 'social', display: '👥 Social' },
        { val: 'internal', display: '🏠 Internal' },
        { val: 'external', display: '🌎 External' },
        { val: 'finance', display: '💸 Finance' },
        { val: 'communications', display: '💬 Comms' },
        { val: 'web', display: '💻 Web' },
        { val: 'firstyear', display: '👦 First-Year Rep' },
    ]

    return (
        <>
            <label htmlFor="year-select" className="block mb-2 text-sm font-bold text-gray-600">
                Filter members (click each attribute to select/unselect it)
            </label>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
                {years.map((year, index) => (
                    <button
                        key={index}
                        onClick={() => handleYearChange(year.val)}
                        className={`
                            px-4 py-2 text-sm font-medium rounded-md border border-gray-300
                            w-auto
                            ${selectedYear === year.val ? 'bg-blue-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}
                        `}
                    >
                        {year.display}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-5">
                {departments.map((department, index) => (
                    <button
                        key={index}
                        onClick={() => handleDepartmentChange(department.val)}
                        className={`
                            px-4 py-2 text-sm font-medium rounded-md border border-gray-300
                            w-auto
                            ${selectedDepartment === department.val ? 'bg-gray-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}
                        `}
                    >
                        {department.display}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Selector
