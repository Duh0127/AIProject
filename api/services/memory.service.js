exports.getMessagesByThread = async (memorySaver, threadId) => {
    if (!threadId) throw new Error("É necessário informar o threadId");

    const allMemoryEntries = await memorySaver.list();
    console.log("allMemoryEntries", JSON.stringify(allMemoryEntries, null, 2));


    const threadMessages = allMemoryEntries
        .filter((entry) => entry.metadata?.thread_id === threadId)
        .map((entry) => ({
            role: entry.metadata?.role || "unknown",
            content: entry.data?.content || entry.data?.text || "",
            date: entry.timestamp || null,
        }));

    return threadMessages;
}
