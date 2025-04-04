export default function groupBy<T>(array: T[], n: number): T[][] {
    let groups = []
    for (let i = 0; i < array.length; i += n) {
        groups.push(array.slice(i, i + n))
    }
    return groups
}
